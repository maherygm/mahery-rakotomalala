const Loader = ({ progress }: { progress: number }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        zIndex: 9999,
        flexDirection: "column",
      }}
    >
      {/* <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{progress}%</div> */}
      <div
        style={{
          width: "200px",
          height: "10px",
          border: "1px solid #000",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#000",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Loader;
