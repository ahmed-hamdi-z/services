<h1 align="center">Loyal-Pet</h1>

### Installation

```bash
$ npm install

# Development
$ npm run dev

# Production
$ npm run build
$ npm preview
```

#### [!CAUTION] You need to add the necessary environment variables to send emails

```env
VITE_EMAILJS_SERVICE_ID="your_emailJs_id"

VITE_EMAILJS_TEMPLATE_ID="your_temp_id"

VITE_EMAILJS_KEY="your_emailjs_key"
```

#### [!CAUTION] The Email template must contains these properties

```ts
const template = {
  from_name: form.name,
  from_email: form.email,
  phone: form.phone,
  subject: "Your_Subject",
  to_name: "Your_Name",
  message: form.message,
};
```

### Made with:

» React JS <br>
» Tailwind CSS <br>
» Email JS <br>
» Swiper <br>
» TypeScript <br>
