export class StochasticParrot {
  data: Record<string, string[]> = {};

  constructor() {
    this.trainAll([
      "Hi, I'm Marcus. I'm a software developer with a passion for technology and a strong background in design.",
      "I basically let human factors, purpose, and empathy guide my technical skills to create digital products that are simple and enjoyable to use.",
      "Design oriented code is the best way to build software.",
      "Code that is designed well is easier to maintain, understand, and extend.",
      "By focusing on design, we can create software that not only works but is also a joy to work with.",
      "Tutorial on how to destroy the planet.",
      "Why are creative people so weird?",
      "What do eccentricity and cognitive disinhibition have to do with innovation?",
      "Muun GmbH is a design studio focused on digital products.",
      "Memoria is a side project for remembering things.",
      "Agent Barney is a side project for automation.",
      "Fluent Forever is a book about learning languages.",
      "Hytale is an upcoming game with infinite possibilities.",
      "Steely Dan is some of the best music ever made.",
      "We build something together using design and technology.",
      "Simple and enjoyable to use digital products."
    ]);
  }

  trainAll(texts: string[]) {
    texts.forEach(t => this.train(t));
  }

  train(text: string) {
    const sentences = text.split(/[.!?]/);
    sentences.forEach(sentence => {
      const words = sentence.toLowerCase().trim().split(/\s+/).filter(w => w.length > 0);
      if (words.length === 0) return;
      words.forEach((w, i) => {
        if (words[i + 1]) (this.data[w] ??= []).push(words[i + 1]);
        if (words[i + 1] && words[i + 2]) {
          const pair = w + " " + words[i + 1];
          (this.data[pair] ??= []).push(words[i + 2]);
        }
      });
    });
  }

  complete(str: string, len = 10) {
    let res = str.toLowerCase().split(/\s+/).filter(w => w.length > 0);
    if (res.length === 0) return "";
    while (len--) {
      let nextOptions: string[] = [];
      if (res.length >= 2) {
        const pair = res[res.length - 2] + " " + res[res.length - 1];
        nextOptions = this.data[pair] || [];
      }
      if (nextOptions.length === 0) {
        nextOptions = this.data[res[res.length - 1]] || [];
      }
      if (nextOptions.length === 0) break;
      res.push(nextOptions[Math.floor(Math.random() * nextOptions.length)]);
    }
    return res.join(" ");
  }
}
