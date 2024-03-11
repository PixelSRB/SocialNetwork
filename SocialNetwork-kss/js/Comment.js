class Comment {
  post_id = "";
  user_id = "";
  content = "";
  api_url = "https://6584bf41022766bcb8c78a8c.mockapi.io";
  api_url1 = "https://6584c034022766bcb8c78b38.mockapi.io";

  create() {
    let data = {
      post_id: this.post_id,
      user_id: this.user_id,
      content: this.content,
    };

    data = JSON.stringify(data);

    fetch(this.api_url1 + "/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Postavljen komentar");
      });
  }

  async get(post_id) {
    let api_url1 = this.api_url1 + "/comments";

    const response = await fetch(api_url1);
    const data = await response.json();
    let post_comments = [];

    let i = 0;
    data.forEach((item) => {
      if (item.post_id === post_id) {
        post_comments[i] = item;
        i++;
      }
    });

    return post_comments;
  }
}
