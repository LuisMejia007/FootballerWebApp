package com.example.footballers.consumer;


import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.amqp.rabbit.core.RabbitMessagingTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessagingTemplate;

public class EventConsumer {

    @Autowired
    private SimpMessageSendingOperations messagingTemplate;

    @RabbitListener(queues = "footballerQueue")
    public void receive(String message) {


        messagingTemplate.convertAndSend("/topic/public", message);
        System.out.println("Message Received from Footballer Exchange" + message);
    }
}
