export class StochasticParrot {
  data: Record<string, string[]> = {};

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
