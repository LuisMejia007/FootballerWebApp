package com.example.footballers.configuration;

import org.springframework.amqp.core.TopicExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.amqp.core.Exchange;

import com.example.footballers.services.footballersService;
import org.springframework.context.annotation.Primary;

@Configuration
public class EventProducerConfiguration {

    @Bean
    public Exchange eventExchange(){

        return new TopicExchange("footballerExchange");
    }

    @Primary
    @Bean
    public footballersService footballerService(RabbitTemplate rabbitTemplate, Exchange exchange){

        return new footballersService(rabbitTemplate, exchange);
    }

}
