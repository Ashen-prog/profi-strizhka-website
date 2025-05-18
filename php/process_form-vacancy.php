<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer-master/src/Exception.php';
require 'libs/PHPMailer-master/src/PHPMailer.php';
require 'libs/PHPMailer-master/src/SMTP.php';

header('Content-Type: application/json');

$service = isset($_POST['service']) ? trim(htmlspecialchars($_POST['service'])) : '';
$name = isset($_POST['fio']) ? trim(htmlspecialchars($_POST['fio'])) : '';
$phone = isset($_POST['phone']) ? trim(htmlspecialchars($_POST['phone'])) : '';
$gender = isset($_POST['gender']) ? trim(htmlspecialchars($_POST['gender'])) : '';
$honeypot = isset($_POST['email_confirm']) ? trim($_POST['email_confirm']) : '';
$ip = $_SERVER['REMOTE_ADDR'];

// Honeypot: если поле заполнено — бот
if (!empty($honeypot)) {
    echo json_encode(['status' => 'error', 'message' => 'Обнаружен спам.']);
    exit;
}

// Ограничение частоты отправки с одного IP (например, не чаще 1 раза в 30 секунд)
session_start();
if (isset($_SESSION['last_vacancy_submit']) && time() - $_SESSION['last_vacancy_submit'] < 30) {
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, подождите перед повторной отправкой.']);
    exit;
}
$_SESSION['last_vacancy_submit'] = time();

// Проверяем корректность данных
if (empty($service) || empty($name) || empty($phone) || empty($gender)) {
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, заполните все поля формы.']);
    exit;
}

if (!preg_match('/^\d{10}$/', $phone)) {
    echo json_encode(['status' => 'error', 'message' => 'Укажите корректный номер телефона.']);
    exit;
}

try {
    $mail = new PHPMailer(true);

    // Настройки сервера
    $mail->isSMTP();
    $mail->Host = 'smtp.timeweb.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'profi-strizka@cj79433.tw1.ru';
    $mail->Password = 'Sloprama284552';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 2525;

    // От кого
    $mail->setFrom('profi-strizka@cj79433.tw1.ru', 'Ваш сайт');
    // Кому
    $mail->addAddress('ashen@ya.ru', 'Администратор');

    // Формирование сообщения
    $mail->isHTML(true);
    $mail->Subject = 'Новый отклик на вакансию';
    $mail->Body = "
        <p><strong>Вакансия:</strong> $service</p>
        <p><strong>Имя:</strong> $name</p>
        <p><strong>Телефон:</strong> +7 $phone</p>
        <p><strong>Пол:</strong> $gender</p>
    ";

    // Отправка письма
    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Спасибо за ваш отклик!']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "Ошибка при отправке отклика: {$mail->ErrorInfo}"]);
}
