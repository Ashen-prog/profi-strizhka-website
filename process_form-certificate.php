<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer/src/Exception.php';
require 'libs/PHPMailer/src/PHPMailer.php';
require 'libs/PHPMailer/src/SMTP.php';

header('Content-Type: application/json');

// Получаем данные из формы
$service = isset($_POST['service']) ? trim(htmlspecialchars($_POST['service'])) : '';
$fio = isset($_POST['fio']) ? trim(htmlspecialchars($_POST['fio'])) : '';
$tel = isset($_POST['tel']) ? trim(htmlspecialchars($_POST['tel'])) : '';

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
