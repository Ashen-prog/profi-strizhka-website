<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer-master/src/Exception.php';
require 'libs/PHPMailer-master/src/PHPMailer.php';
require 'libs/PHPMailer-master/src/SMTP.php';

header('Content-Type: application/json');

// Получаем данные из формы
$service = isset($_POST['service']) ? trim(htmlspecialchars($_POST['service'])) : '';
$fio = isset($_POST['fio']) ? trim(htmlspecialchars($_POST['fio'])) : '';
$tel = isset($_POST['tel']) ? trim(htmlspecialchars($_POST['tel'])) : '';
$honeypot = isset($_POST['email_confirm']) ? trim($_POST['email_confirm']) : '';
$ip = $_SERVER['REMOTE_ADDR'];

// Honeypot: если поле заполнено — бот
if (!empty($honeypot)) {
    echo json_encode(['status' => 'error', 'message' => 'Обнаружен спам.']);
    exit;
}

// Ограничение частоты отправки с одного IP (например, не чаще 1 раза в 30 секунд)
session_start();
if (isset($_SESSION['last_certificate_submit']) && time() - $_SESSION['last_certificate_submit'] < 30) {
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, подождите перед повторной отправкой.']);
    exit;
}
$_SESSION['last_certificate_submit'] = time();

// Проверка на заполненность
if (empty($service) || empty($fio) || empty($tel)) {
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, заполните все поля формы.']);
    exit;
}

$mail = new PHPMailer(true);

try {
    // Настройки сервера
    $mail->isSMTP();
    $mail->Host       = 'smtp.timeweb.ru';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'profi-strizka@cj79433.tw1.ru';
    $mail->Password   = 'Sloprama284552';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 2525;

    // От кого
    $mail->setFrom('profi-strizka@cj79433.tw1.ru', 'Ваш сайт');
    // Кому
    $mail->addAddress('ashen@ya.ru', 'Администратор');

    // Формирование сообщения
    $mail->isHTML(false);
    $mail->Subject = 'Новый заказ сертификата';
    $mail->Body    = "Салон: $service\nИмя: $fio\nТелефон: $tel";

    // Отправка письма
    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Спасибо за заказ сертификата!']);
} catch (Exception $e) {
    echo json_encode(['status' => 'error', 'message' => "Ошибка при отправке: {$mail->ErrorInfo}"]);
}
