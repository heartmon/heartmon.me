import { action, computed, observable } from 'mobx';

let store = null;

const messages = [
    "nice to have you here",
    "i like you",
    "welcome <3",
    "let's drink a beer together mate!",
    "you look awesome today"
];

const bookmarks = [
  {
    id: 1,
    tags: ["Android"],
    title: "Dependency Injection with Dagger 2: The API",
    url: "http://frogermcs.github.io/dependency-injection-with-dagger-2-the-api/",
    backdrop: "http://frogermcs.github.io/images/14/local_components.png",
    excerpt: "Lorem Ipsum"
  },
  {
    id: 2,
    tags: ["Android"],
    title: "Dependency Injection with Dagger 2: The API",
    url: "http://frogermcs.github.io/dependency-injection-with-dagger-2-the-api/",
    backdrop: "http://frogermcs.github.io/images/14/local_components.png",
    excerpt: "Lorem Ipsum"
  }
]

class Store {
    @observable helloMessage = '';
    @observable bookmarks = bookmarks;

    constructor(isServer, message) {
        this.helloMessage = message ? message : messages[Math.floor(Math.random() * (messages.length - 1))];
    }

    @action start = () => {
        this.timer = setInterval(() => {
            this.helloMessage = messages[Math.floor(Math.random() * (messages.length - 1))];
        }, 10000);
    }

    stop = () => clearInterval(this.timer)
}

export default function initStore (isServer, message) {
    if (isServer && typeof window === 'undefined') {
        return new Store(isServer, message)
    } else {
        if (store === null) {
            store = new Store(isServer, message)
        }
        return store
    }
}
