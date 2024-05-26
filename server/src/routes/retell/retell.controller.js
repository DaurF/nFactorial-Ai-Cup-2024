const RETELL_API_TOKEN = process.env.RETELL_API_TOKEN;


async function httpRegisterCall(req, res) {
  console.log(`reg: `);
  console.log(req.body)
  const agent_id = req.body.agentId;
  const body = {
    agent_id,
    audio_websocket_protocol: "web",
    audio_encoding: "s16le",
    sample_rate: 24000,
  };

  console.log("body");
  console.log(body);

  const response = await fetch("https://api.retellai.com/register-call", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: 'Bearer 140d03f3-018c-456c-a82a-08691e961e32',
    },
    body: JSON.stringify(body),
  });
  const {call_id: callId, sample_rate: sampleRate} = await response.json();
  return res.status(201).json({callId, sampleRate});
}

export {httpRegisterCall}
