json.channel do 
    json.set! @channel.id do
        json.partial! '/api/channels/channel', channel: @channel
        json.partial! '/api/channels/channel_extended', channel: @channel             
    end
end
json.users do
    channel.subscribers.merge(Subscription.active).each do |subscriber|
        json.set! subscriber.id do
            json.partial! '/api/users/user_short', user: subscriber
        end
    end
end
json.messages do
    channel.messages.each do |message|
        json.set! message.id do
            json.partial! '/api/messages/message', message: message
        end
    end
end