import styled from "styled-components";

const FancyButtonWrapper = styled.div`
  a {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;

    font-weight: 600;
    color: #382b22;
    text-transform: uppercase;
    padding: 1.25em 2em;
    background: #fff0f0;
    border: 2px solid #b18597;
    border-radius: 0.75em;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      background 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  a.learn-more::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #f9c4d2;
    border-radius: inherit;
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0.75em, -1em);
    transform: translate3d(0, 0.75em, -1em);
    transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1),
      -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  a.learn-more:hover {
    background: #ffe9e9;
    -webkit-transform: translate(0, 0.25em);
    transform: translate(0, 0.25em);
  }

  a.learn-more:hover::before {
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0.5em, -1em);
    transform: translate3d(0, 0.5em, -1em);
  }

  button.learn-more:active {
    background: #ffe9e9;
    -webkit-transform: translate(0em, 0.75em);
    transform: translate(0em, 0.75em);
  }

  a.learn-more:active::before {
    -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
    -webkit-transform: translate3d(0, 0, -1em);
    transform: translate3d(0, 0, -1em);
  }
`;

export const FancyButton = ({ title, href, className }) => {
  return (
    <FancyButtonWrapper className={className}>
      <a
        href={href}
        target="_blank"
        className="learn-more"
        rel="noreferrer"
        title={title}
      >
        {title}
      </a>
    </FancyButtonWrapper>
  );
};
