<?php
// Получаем и фильтруем данные из формы
$service = htmlspecialchars($_POST['service']);
$name = htmlspecialchars($_POST['fio']);
$review = htmlspecialchars($_POST['review']);

// Проверяем, что все поля заполнены
if (!empty($service) && !empty($name) && !empty($review)) {
    // Отправка данных на email
    $to = 'ashen@ya.ru'; 
    $subject = 'Новый отзыв с сайта';
    $message = "Услуга: $service\nИмя: $name\nОтзыв:\n$review";
    $headers = 'From: no-reply@example.com' . "\r\n" .
               'Reply-To: no-reply@example.com' . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo 'Спасибо за ваш отзыв!';
    } else {
        echo 'Ошибка при отправке отзыва.';
    }
} else {
    echo 'Пожалуйста, заполните все поля формы.';
}
?>
