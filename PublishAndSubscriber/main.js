const channels = () => {
    const channels = {}

    const subscriber = (name, callback) => {
        const backs = channels[name] || []

        backs.push(callback)
        channels[name] = backs
    }

    const publish = (name, message) => {
        if (channels[name]) {
            channels[name].forEach(element => {
                console.log(name + ' ' + message)
            });
        }
    }

    return {
        publish,
        subscriber
    }
}

const socket = channels()

socket.subscriber('service_01', msg => {
    console.log('service_01 called ...' + msg)
})

socket.subscriber('service_02', msg => {
    console.log('service_02 called ...' + msg)
})

setInterval((id = Math.random()) => {
    socket.publish('service_01', 'new message ' + id.toString(36).substring(2))
}, 1000)
