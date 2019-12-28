import React from 'react';
import style from '../main.module.css';

const Contact = (props) => {
  return (
    <section className={style.contact}>
      <h4>Contact Me:</h4>
      <div>Email: <a href="mailto:ivan93mail@gmail.com?subject=ForJob">
      ivan93mail@gmail.com</a></div>
      <div>Phone: <a href="tel:+380932345170">+380932345170</a></div>
      <div>Telegram: <a href="https://telegram.me/vannish">@vannish</a></div>

      <form className={style.formContainer} data-remote="false" action="https://formspree.io/ivan93mail@gmail.com" accept-charset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓"/>
        <input type="hidden" name="authenticity_token" value="AvTGqU5Ru89DzprSmMyp7KtSt20cVYOuPilocQUuJT3FQRgeowyNdrI1oXADTskdmQtdLZtu8ZqH07nhHkDX1A=="/>
        <input placeholder="Your name:" type="text" name="name"/><br/><br/>
        <input placeholder="Your email:" type="email" name="email"/><br/><br/>
        <textarea placeholder="Your Message:" rows="10" name="message"></textarea><br/><br/>
        <input value="http://localhost:3000/contact" type="hidden" name="_next"/>
        <input value="plain" type="hidden" name="_format"/>
        <input value="Vanchas Contact Form" type="hidden" name="_subject"/>
        <input type="submit" name="commit" value="Send" className={style.submit} data-disable-with="Send"/>
      </form>
    </section>
  );
};

export default Contact;