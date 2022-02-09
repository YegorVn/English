const Theme = ({ theme, className, handleRemoveTheme, idx }) => {
  return (
    <div className={"theme " + className}>
      <button
        type="button"
        className="hidden-button pt-1 pb-1 ps-3 pe-3"
        value={theme.id}
        onClick={(e) => {
          if (handleRemoveTheme) handleRemoveTheme(e.target.value);
        }}
      >
        {theme.text}
      </button>
    </div>
  );
};

export default Theme;
