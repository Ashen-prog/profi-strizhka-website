<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer-master/src/Exception.php';
require 'libs/PHPMailer-master/src/PHPMailer.php';
require 'libs/PHPMailer-master/src/SMTP.php';

// Устанавливаем заголовок для JSON-ответа
header('Content-Type: application/json');

// Получаем и фильтруем данные из формы
$service = isset($_POST['service']) ? trim(htmlspecialchars($_POST['service'])) : '';
$name = isset($_POST['fio']) ? trim(htmlspecialchars($_POST['fio'])) : '';
$review = isset($_POST['review']) ? trim(htmlspecialchars($_POST['review'])) : '';
$honeypot = isset($_POST['email_confirm']) ? trim($_POST['email_confirm']) : '';
$ip = $_SERVER['REMOTE_ADDR'];

// Honeypot: если поле заполнено — бот
if (!empty($honeypot)) {
    echo json_encode(['status' => 'error', 'message' => 'Обнаружен спам.']);
    exit;
}

// Ограничение частоты отправки с одного IP (например, не чаще 1 раза в 30 секунд)
session_start();
if (isset($_SESSION['last_review_submit']) && time() - $_SESSION['last_review_submit'] < 30) {
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, подождите перед повторной отправкой.']);
    exit;
}
$_SESSION['last_review_submit'] = time();

// Проверяем, что все поля заполнены
if (!empty($service) && !empty($name) && !empty($review)) {
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
        $mail->isHTML(false);
        $mail->Subject = 'Новый отзыв с сайта';
        $mail->Body = "Услуга: $service\nИмя: $name\nОтзыв:\n$review";

        // Отправка письма
        $mail->send();

        echo json_encode(['status' => 'success', 'message' => 'Спасибо за ваш отзыв!']);
    } catch (Exception $e) {
        echo json_encode(['status' => 'error', 'message' => "Ошибка при отправке отзыва: {$mail->ErrorInfo}"]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Пожалуйста, заполните все поля формы.']);
}
?>
