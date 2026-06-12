export async function askAI(
  messages: { role: 'user' | 'assistant'; content: string }[],
  system: string
): Promise<string> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages, system }),
  })

  if (!res.ok) {
    const err = await res.json()
    throw new Error(err.error || 'AI request failed')
  }

  const data = await res.json()
  return data.text
}
