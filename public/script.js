const metaElement = document.querySelector('meta[name=csrf-token]');
const token = metaElement.getAttribute('content');
const headers = {
  "Accept-Encoding": "gzip, deflate, br, zstd",
  "Accept-Language": "es-ES,es;q=0.9,en;q=0.8",
  Connection: "keep-alive",
  "Content-Type": "application/json",
  "X-Csrf-Token": token,
  "X-Requested-With": "XMLHttpRequest",
}
const user_id = 248542;
const room_id = 133726;
const message_type = "dice_roll";
const visibility = "public";
const sender_type = "Character";
const sender_id = 1113696;
const user_name = "LcVoN";
const user_avatar_url = "https://secure.gravatar.com/avatar/4d3e5d16516aea49776953ea37b9e075.png?d=robohash\u0026r=PG\u0026s=55";
const sender_name = "Logandi Bölvun";
const sender_portrait_url = "https://s3-eu-west-2.amazonaws.com/dungeon20/images/1924992/medium-d32b3a924fb4e5e7e20997887bd30024a6f9f1b0.png?1714227095";
const questu = "https://nivel20.com/room_messages";
const method = "POST";
let nivel = 3;
let infoLevel;
let guardia = false;
let ilusion = false;
let mano = false;
let esc = false;

function iniciar() {
  infoLevel = [
    {
      notation: "Nivel 1 = 1d100, Nivel 2 = 1d100",
      split_notation: "Nivel 1 = d100, Nivel 2 = d100",
      set: ["d100", "d100"],
      results: ["4", "2"],
    },
    {
      notation: "Nivel 1 = 1d100, Nivel 2 = 1d100",
      split_notation: "Nivel 1 = d100, Nivel 2 = d100",
      set: ["d100", "d100"],
      results: ["4", "3"],
    },
    {
      notation: "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100",
      split_notation: "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100",
      set: ["d100", "d100", "d100"],
      results: ["4", "3", "2"],
    },
    {
      notation: "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100",
      split_notation: "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100",
      set: ["d100", "d100", "d100"],
      results: ["4", "3", "3"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100",
      set: ["d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100",
      set: ["d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "2"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100",
      set: ["d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100",
      set: ["d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100, Nivel 6 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100, Nivel 6 = d100",
      set: ["d100", "d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100, Nivel 6 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100, Nivel 6 = d100",
      set: ["d100", "d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100, Nivel 6 = 1d100, Nivel 7 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100, Nivel 6 = d100, Nivel 7 = d100",
      set: ["d100", "d100", "d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2", "1", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100, Nivel 6 = 1d100, Nivel 7 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100, Nivel 6 = d100, Nivel 7 = d100",
      set: ["d100", "d100", "d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2", "1", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100, Nivel 6 = 1d100, Nivel 7 = 1d100, Nivel 8 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100, Nivel 6 = d100, Nivel 7 = d100, Nivel 8 = d100",
      set: ["d100", "d100", "d100", "d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2", "1", "1", "1"],
    },
    {
      notation:
        "Nivel 1 = 1d100, Nivel 2 = 1d100, Nivel 3 = 1d100, Nivel 4 = 1d100, Nivel 5 = 1d100, Nivel 6 = 1d100, Nivel 7 = 1d100, Nivel 8 = 1d100",
      split_notation:
        "Nivel 1 = d100, Nivel 2 = d100, Nivel 3 = d100, Nivel 4 = d100, Nivel 5 = d100, Nivel 6 = d100, Nivel 7 = d100, Nivel 8 = d100",
      set: ["d100", "d100", "d100", "d100", "d100", "d100", "d100", "d100"],
      results: ["4", "3", "3", "3", "2", "1", "1", "1"],
    },
  ];
}

function espaciosConjuro() {
  const recuperar = document.getElementById("recuperar");
  const gastarNivel1 = document.getElementById("gastarNivel1");
  const gastarNivel2 = document.getElementById("gastarNivel2");
  const espaciosDis = document.getElementById("espaciosDis");

  recuperar.addEventListener("click", () => {
    iniciar();
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation: infoLevel[nivel - 3].notation,
            split_notation: infoLevel[nivel - 3].split_notation,
            set: infoLevel[nivel - 3].set,
          },
          results: infoLevel[nivel - 3].results,
          roll_name: "Se recuperaron todos los espacios de conjuro",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });

  gastarNivel1.addEventListener("click", () => {
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation: "1d100 - 1",
            split_notation: "d100 - 1",
            set: ["d100"],
          },
          results: [infoLevel[nivel - 3].results[0]],
          roll_name: "Se gastó un espacio de conjuro nivel 1",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
    infoLevel[nivel - 3].results[0] = parseInt(
      infoLevel[nivel - 3].results[0] - 1
    );
    infoLevel[nivel - 3].results[0] =
      infoLevel[nivel - 3].results[0].toString();
  });

  gastarNivel2.addEventListener("click", () => {
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation: "1d100 - 1",
            split_notation: "d100 - 1",
            set: ["d100"],
          },
          results: [infoLevel[nivel - 3].results[1]],
          roll_name: "Se gastó un espacio de conjuro nivel 2",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
    infoLevel[nivel - 3].results[1] = parseInt(
      infoLevel[nivel - 3].results[1] - 1
    );
    infoLevel[nivel - 3].results[1] =
      infoLevel[nivel - 3].results[1].toString();
  });

  espaciosDis.addEventListener("click", () => {
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation: "Nivel 1 = 1d100, Nivel 2 = 1d100",
            split_notation: "Nivel 1 = d100, Nivel 2 = d100",
            set: ["d100", "d100"],
          },
          results: infoLevel[nivel - 3].results,
          roll_name: "Los espacios de conjuro disponibles son:",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });
}

function hechizos() {
  const guardiaCuchillas = document.getElementById("guardiaCuchillas");
  const iluMenor = document.getElementById("iluMenor");
  const manoMago = document.getElementById("manoMago");
  const escudo = document.getElementById("escudo");
  const pasoBrumoso = document.getElementById("pasoBrumoso");

  guardiaCuchillas.addEventListener("click", () => {
    guardia = !guardia;
    const notation = guardia
      ? "Se activo Guardia de cuchillas, duración 1d100 asalto"
      : "Se acabo el hechizo de Guardia de cuchillas";
    const split_notation = guardia
      ? "Se activo Guardia de cuchillas, duración d100 asalto"
      : "Se acabo el hechizo de Guardia de cuchillas";
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation,
            split_notation,
            set: ["d100"],
          },
          results: ["1"],
          roll_name: "Guardia de cuchillas",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });

  iluMenor.addEventListener("click", () => {
    ilusion = !ilusion;
    const notation = ilusion
      ? "Se activo Ilusion menor, duración 1d100 minuto"
      : "Se acabo el hechizo de Ilusion menor";
    const split_notation = ilusion
      ? "Se activo Ilusion menor, duración d100 minuto"
      : "Se acabo el hechizo de Ilusion menor";
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation,
            split_notation,
            set: ["d100"],
          },
          results: ["1"],
          roll_name: "Ilusión menor",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });

  manoMago.addEventListener("click", () => {
    mano = !mano;
    const notation = mano
      ? "Se activo Mano de mago, duración 1d100 minuto"
      : "Se acabo el hechizo de Mano de mago";
    const split_notation = mano
      ? "Se activo Mano de mago, duración d100 minuto"
      : "Se acabo el hechizo de Mano de mago";
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation,
            split_notation,
            set: ["d100"],
          },
          results: ["1"],
          roll_name: "Mano de mago",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });

  escudo.addEventListener("click", () => {
    esc = !esc;
    const notation = esc
      ? "Se activo Escudo, duración 1d100 asalto"
      : "Se acabo el hechizo de Escudo";
    const split_notation = esc
      ? "Se activo Escudo, duración d100 asalto"
      : "Se acabo el hechizo de Escudo";
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation,
            split_notation,
            set: ["d100"],
          },
          results: ["1"],
          roll_name: "Escudo",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });

  pasoBrumoso.addEventListener("click", () => {
    fetch(questu, {
      method,
      headers,
      body: JSON.stringify({
        user_id,
        room_id,
        message_type,
        visibility,
        sender_type,
        sender_id,
        data: {
          roll: {
            notation: "Teletrasnportación, máxima distancia 1d100 pies",
            split_notation: "Teletrasnportación, máxima distancia d100 pies",
            set: ["d100"],
          },
          results: ["30"],
          roll_name: "Paso brumoso acción adicional",
        },
        user_name,
        user_avatar_url,
        sender_name,
        sender_portrait_url,
      }),
    });
  });
}

iniciar();
