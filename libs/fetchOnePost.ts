
export async function fetchOnePost({ delayMS = 1000 } = {}) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          title: "Example post title",
          body: "Example post content",
        });
      }, delayMS);
    });
  }
  