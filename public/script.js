const labels = document.getElementsByClassName("progress-label");
const inpDa = document.querySelector('input[name="char[damage]"]');
const messages = document.getElementsByClassName("room-message");
const inpHP = document.querySelector('input[name="char[new_hp]"]');
const saveL = document.querySelector(".btn-update-hp");

let daño;
let newHP;
let labelC;

function extr() {
  const timerM = setInterval(() => {
    const txt = messages[1].textContent;
    if (txt.includes("Pierde extremidad")) {
      clearInterval(timerM);
      const detDM = parseInt(txt.slice(-4, -2));
      let notation = "1d6";
      let split_notation = "d6";
      let roll_type = "damage";
      let parent_icon =
        "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3118/small-c68c279721a185b50d3a9e17994fea002ccf73f0.jpg?1651376608";
      let roll_name;
      let results;
      let icon;
      if (detDM === 1) {
        roll_name = "La cabeza";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/2927/medium-6516cadc21f7aa05da40d3df7e8b789b5e5a3e71.png?1637238599";
      } else if (detDM === 2 || detDM === 3) {
        roll_name = "Un brazo";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3457/small-cfe8639ee5e1d6b081de659ad2925e205339870a.png?1695899430";
      } else if (detDM === 4 || detDM === 5) {
        roll_name = "Una pierna";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/136/small-813e4b2914a99a42e7b3b11c75dbbf5b971cfd3b.png?1637056702";
      } else {
        roll_name = "Torso";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3232/small-281c6a4dcb567011ab3c0041191ba0508ee410ad.png?1694791819";
      }
      sendMessage(
        "dice_roll",
        {
          roll: {
            notation,
            split_notation,
            set: [split_notation],
            rolls: {
              0: {
                notation,
                dice: notation,
                count: "1",
                diceList: [split_notation],
              },
            },
            error: "false",
          },
          results,
          roll_name,
          roll_type,
          icon_url: icon,
          parent_icon_url: parent_icon,
        },
        {
          icon,
          parent_icon,
          sender_info: "User-248241",
        }
      );
    }
  });
}

function massiveD() {
  const timerM = setInterval(() => {
    const txt = messages[1].textContent;
    let notation = "1d10";
    let split_notation = "d10";
    let roll_type = "damage";
    let parent_icon =
      "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3118/small-c68c279721a185b50d3a9e17994fea002ccf73f0.jpg?1651376608";
    let roll_name;
    let results;
    let icon;
    if (txt.includes("Daño masivo")) {
      clearInterval(timerM);
      const detDM = parseInt(txt.slice(-4, -2));
      if (detDM === 1) {
        diceRoll("1d6", {
          roll_name: "Pierde extremidad",
          sender_info: "User-248241",
        });
        extr();
      } else if (detDM === 2 || detDM === 3) {
        roll_name =
          "Cae al suelo y queda aturdido hasta el final de su siguiente turno";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3113/large-b98aab0f34b9f14553003ddf046f3c12fd1c09fb.jpg?1651376605";
      } else if (detDM === 4 || detDM === 5) {
        roll_name = "Queda aturdido hasta el final de su siguiente turno";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3120/large-00f54a8c5921d5d8faf48e47f22fd3499d3a6b2a.jpg?1651376610";
      } else if (detDM === 6 || detDM === 7) {
        roll_name =
          "No puede reaccionar y tiene desventaja (ataques y habilidades) hasta el final de su siguiente turno";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3112/large-dfaf741d344b6b4645e022c17450f725d7991b53.jpg?1651376604";
      } else {
        roll_name = "No puede reaccionar hasta el final de su siguiente turno";
        results = [`${detDM}`];
        icon =
          "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3117/large-6dc2eca16d004e8be748c7f218cd3f94276e841b.jpg?1651376607";
      }
      sendMessage(
        "dice_roll",
        {
          roll: {
            notation,
            split_notation,
            set: [split_notation],
            rolls: {
              0: {
                notation,
                dice: notation,
                count: "1",
                diceList: [split_notation],
              },
            },
            error: "false",
          },
          results,
          roll_name,
          roll_type,
          icon_url: icon,
          parent_icon_url: parent_icon,
        },
        {
          icon,
          parent_icon,
          sender_info: "User-248241",
        }
      );
    }
  });
}

inpDa.addEventListener("change", (e) => {
  daño = parseInt(e.target.value);
});

inpHP.addEventListener("change", (e) => {
  newHP = e.target.value;
});

for (let i = 0; i < labels.length; i++) {
  labels[i].addEventListener("click", (e) => (labelC = e));
}

saveL.addEventListener("click", () => {
  const hPlayer = parseInt(labelC.target.textContent.split(" / ")[1]);
  if (
    daño >= (hPlayer * 50) / 100 &&
    !labelC.target.className.includes("mass-dam")
  ) {
    const timerM = setInterval(() => {
      const txt = messages[1].textContent;
      if (txt.includes("TS" && "Constitución")) {
        clearInterval(timerM);
        const detDM = parseInt(txt.slice(-4, -2));
        if (detDM < 15) {
          diceRoll("1d10", {
            roll_name: "Daño masivo",
            sender_info: "User-248241",
          });
          labelC.target.className += " mass-dam";
          massiveD();
        } else {
          sendMessage(
            "dice_roll",
            {
              roll: {
                notation: "1d20",
                split_notation: "d20",
                set: ["d20"],
                rolls: {
                  0: {
                    notation: "1d10",
                    dice: "d10",
                    count: "1",
                    diceList: ["d10"],
                  },
                },
                error: "false",
              },
              results: [`${detDM}`],
              roll_name: "Se ha salvado del daño masivo",
              icon_url:
                "https://s3-eu-west-2.amazonaws.com/dungeon20/images/530/large-b7937c337e3aef929e8715813360ef6f8ddc68fc.png?1637057424",
              parent_icon_url:
                "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3118/small-c68c279721a185b50d3a9e17994fea002ccf73f0.jpg?1651376608",
            },
            {
              icon: "https://s3-eu-west-2.amazonaws.com/dungeon20/images/530/large-b7937c337e3aef929e8715813360ef6f8ddc68fc.png?1637057424",
              parent_icon:
                "https://s3-eu-west-2.amazonaws.com/dungeon20/images/3118/small-c68c279721a185b50d3a9e17994fea002ccf73f0.jpg?1651376608",
              sender_info: "User-248241",
            }
          );
        }
      }
    }, 675);
  } else if (
    (parseInt(newHP) === hPlayer || newHP === '') &&
    (labelC.target.className.includes("mass-dam"))
  ) {
    labelC.target.className = labelC.target.className.replaceAll(
      / mass-dam/g,
      ""
    );
  }
  daño = 0;
  newHP = 0;
});
