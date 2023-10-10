import React from "react";

export default function Form() {
      return (
            <form
                  onSubmit={(e) => {
                        e.preventDefault();
                  }}>
                  <label for="email">Email</label>
                  <input type="email" placeholder="Email" />
                  <label for="message">Message</label>
                  <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Message"></textarea>
                  <button>Envoyer</button>
            </form>
      );
}
