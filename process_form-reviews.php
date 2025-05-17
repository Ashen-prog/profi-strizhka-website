<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'libs/PHPMailer/src/Exception.php';
require 'libs/PHPMailer/src/PHPMailer.php';
require 'libs/PHPMailer/src/SMTP.php';

// Устанавливаем заголовок для JSON-ответа
header('Content-Type: application/json');

// Получаем и фильтруем данные из формы
$service = isset($_POST['service']) ? trim(htmlspecialchars($_POST['service'])) : '';
$name = isset($_POST['fio']) ? trim(htmlspecialchars($_POST['fio'])) : '';
$review = isset($_POST['review']) ? trim(htmlspecialchars($_POST['review'])) : '';

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
