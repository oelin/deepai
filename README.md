# deepai

A Node.js client for DeepAI's AI Chat (WIP).

## Installation

```js
npm i deepai
```

## Usage

The API is structured identically to OpenAI's chat completions API.

```js
import DeepAI from 'deepai'

const client = DeepAI()

const completion = await client.chat.completions.create('gpt-3.5-turbo', [
  {role: 'system', content: 'You are a friendly robot.'},
  {role: 'user', cotnent: 'What is the capital of France?'},
])
```
