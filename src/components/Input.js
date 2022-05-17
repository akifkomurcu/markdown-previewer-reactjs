

function Input({ text, handleChange, setText }) {
  const mdText = `  Heading
  =======
  
  Sub-heading
  -----------
  
  ### Another deeper heading
  
  Paragraphs are separated
  by a blank line.
  
  Leave 2 spaces at the end of a line to do a
  line break
  
  Text attributes *italic*, **bold**,
  \`monospace\`, ~~strikethrough~~ .
  
  Shopping list:
  
    * apples
    * oranges
    * pears
  
  Numbered list:
  
    1. apples
    2. oranges
    3. pears
  
  The rain---not the reign---in
  Spain.
  
  *[Mehmet Akif Kömürcü-2022](https://akifzsche.github.io)*`;

  const handleClick = () => {
    setText(mdText);
  }

  return (
    <div className="TextInputAll">
      <div className="baslik">
        <div className="baslik-text">Markdown Previewer</div>
        <button
          className="Btn"
          value={mdText}
          onClick={handleClick}
        >
          ?
        </button></div>

      <div className="TextInputArea">
        <textarea
          className="TextInput"
          value={text}
          onChange={handleChange}
          placeholder="Input some text"
        />
      </div>
      <div className="owner">Mehmet Akif Kömürcü - 2022</div>

    </div>
  );
}

export default Input;
