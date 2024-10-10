tsconfig파일이 2개가 생성되는 이유

- tsconfig.json: 브라우저에서 실행할 때 사용
- tsconfig.node.json: Node.js에서 실행할 때 사용(vite.config.ts)

---

궁금한 것

1.  기존 index.html에서

```html
<script type="module" src="/src/main.tsx"></script>
```

인 코드가 빌드를 하고 나면

```html
<script type="module" crossorigin src="/assets/main-C-joelC6.js"></script>
```

이렇게 변환이 되는데, 이 변환은 어떻게 이루어지는 것인가?

---

2.

번들링된 후에 백그라운드js같은 파일이 생성될 때 해시값이 붙어이 이름이 생성이되는데 이때 이 이름을 어떻게 매니페스트에 넣어야 하나.
