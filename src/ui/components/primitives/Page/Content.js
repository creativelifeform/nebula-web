import React from 'react';

export const Content = ({
  children,
  title = null,
  description = null,
  className = '',
}) => (
  <section className={`Content ${className}`}>
    {title && (
      <header>
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </header>
    )}
    <section className="main">{children}</section>
  </section>
);
