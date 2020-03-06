const { RTMClient } = require('@slack/rtm-api')

const rtm = new RTMClient(process.env.SLACK_TOKEN)

const slack = () => {
  rtm.on('message', async (event) => {
    try {
      const reply = await rtm.sendMessage(event.text, event.channel)
      console.log('Message sent successfully', reply.ts)
    } catch (error) {
      console.log('An error occurred', error)
    }
  });

  (async () => {
    await rtm.start()
  })()
}

module.exports = slack
