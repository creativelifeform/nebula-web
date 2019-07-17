import React from 'react';

export const Email = ({ platform }) => (
  <section class="Email">
    <div>Please enter your email to download Nebula for {platform}</div>
    <form>
      <input type="email" placeholder="alex@example.com" />
    </form>
  </section>
);
