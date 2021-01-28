const notification = new Notification('Node.js is awesome!', {
    body: 'Learn how you can build desktop application.'
})

notification.onclick = () => {
    console.log('Notification clicked')
}