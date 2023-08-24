import React, { useEffect } from "react";

const App = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://app.revenuehero.io/scheduler.min.js";
    script1.async = true;
    script1.defer = true;
    document.body.appendChild(script1);
    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  const handleButtonClick = () => {
    const hero = new window.RevenueHero({
      routerId: "590",
    });

    hero
      .submit({ email: "sample@example.com", noOfEmployees: "50-100" })
      .then((data) => {
        hero.dialog.open(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Book Meeting</button>
    </div>
  );
};

export default App;
