package com.example.footballers.configuration;

import org.springframework.amqp.core.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import com.example.footballers.consumer.EventConsumer;
@Configuration
public class EventConsumerConfiguration {


    // This is the exchange that senders will be sending their messages too.
    // Once an exchange acquires the message it will process it to the specified queue.
    @Bean
    public Exchange eventExchange() {
        return new TopicExchange("footballerExchange");
    }


    // This is the queue where all messages will be stored once consumed (received)
    @Bean
    public Queue queue() {
        return new Queue("footballerQueue");
    }

    // The binding represents the connection between a queue and an exchange, both of which are specified above
    @Bean
    public Binding binding(Queue queue, Exchange exchange){

        return BindingBuilder
                .bind(queue)
                .to(exchange)
                .with("footballer.*").noargs();
    }

    @Bean
    public EventConsumer eventReceiver(){
        return new EventConsumer();
    }

}
