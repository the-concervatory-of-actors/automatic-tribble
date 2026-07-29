export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Open Stage — The Conservatory of Actors</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            background: #0d0d0d;
            color: white;
            font-family: -apple-system, system-ui, sans-serif;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            text-align: center;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            width: 100%;
        }
        h1 {
            color: #d49b6e;
            font-size: 3rem;
            font-family: serif;
            letter-spacing: 2px;
            margin-bottom: 10px;
            text-shadow: 0 0 20px rgba(212, 155, 110, 0.15);
        }
        .subtitle {
            color: #aaa;
            font-size: 1.1rem;
            font-family: serif;
            margin-bottom: 40px;
            line-height: 1.5;
        }
        .btn-open {
            display: inline-block;
            padding: 18px 48px;
            background: #d49b6e;
            color: #0d0d0d;
            font-size: 1.5rem;
            font-weight: bold;
            font-family: serif;
            text-decoration: none;
            border-radius: 60px;
            transition: all 0.3s ease;
            box-shadow: 0 0 25px rgba(212, 155, 110, 0.25);
            letter-spacing: 1px;
        }
        .btn-open:hover {
            transform: scale(1.04);
            box-shadow: 0 0 40px rgba(212, 155, 110, 0.5);
            background: #e0a86e;
        }
        .btn-open:active {
            transform: scale(0.96);
        }
        .footer {
            margin-top: 50px;
            font-size: 0.85rem;
            color: #555;
            font-family: serif;
            border-top: 1px solid #2a2a2a;
            padding-top: 20px;
            width: 100%;
            max-width: 400px;
        }
        .footer span {
            color: #d49b6e;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>Open Stage</h1>
        <p class="subtitle">The Conservatory of Actors — digital home of the company</p>

        <a href="https://theconservatoryofactors.univer.se/" class="btn-open" target="_blank">
            Enter the Stage
        </a>

        <div class="footer">
            <span>✦</span> Curated &amp; built for the craft <span>✦</span>
        </div>
    </div>

</body>
</html>`;

    return new Response(html, {
      headers: { "Content-Type": "text/html" },
    });
  }
};
