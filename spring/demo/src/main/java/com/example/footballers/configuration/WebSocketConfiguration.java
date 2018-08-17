package com.example.footballers.configuration;


import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfiguration implements WebSocketMessageBrokerConfigurer {


    // Registering web-socket endpoint for client side communication
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry){

        registry.addEndpoint("/football-ws").setAllowedOrigins("*").withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {

        registry.setApplicationDestinationPrefixes("football-app");


        // Configuring RabbitMQ message broker with our web-socket
        // Relay Port 61613 is specified here rather than 5672 because it is the default relay port for Websockets working with RabbitMQ
//        registry.enableStompBrokerRelay("/topic")
//                .setRelayHost("localhost")
//                .setRelayPort(61613)
//                .setClientLogin("guest")
//                .setClientPasscode("guest");

        registry.enableSimpleBroker("/topic");

    }
}
