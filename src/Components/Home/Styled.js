import styled from "styled-components"

export const QuestionCardStyles = styled.div`
  width: 450px;
  display: block;
  margin: auto;

  p {
    background-color: aliceblue;
  }

  .MuiPaper-root,
  .MuiFormLabel-root,
  .MuiFormGroup-root {
    margin-bottom: 1em;
  }

  .MuiButtonBase-root {
    color: #1493b6;
  }
`

export const ResultCardStyles = styled.div`
  width: 450px;
  display: block;
  margin: auto;

  .author {
    color: #1493b6;
  }

  h3 {
    span {
      color: #ee391b;
    }
  }

  .MuiPaper-root,
  .MuiFormLabel-root,
  .MuiFormGroup-root {
    margin-bottom: 1em;
  }

  .MuiButtonBase-root {
    color: #1493b6;
  }
`
