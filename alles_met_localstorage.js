window.alles_met_localstorage = {
    "getLijst_met_personen": function () {
        return JSON.parse(localStorage.getItem("letterkuil-lijst_personen"))
    },
    "getPersoon": function (persoon) {
        return JSON.parse(localStorage.getItem(persoon))
    },
    "getGeselecteerd_persoon": function () {
        return JSON.parse(localStorage.getItem("letterkuil-geselekteerd_persoon"))
    },
    "getGeselecteerde_letters": function () {
        return JSON.parse(localStorage.getItem("letterkuil-geselekteerde_letters"))
    },
    "setLijst_met_personen": function (data) {
        localStorage.setItem("letterkuil-lijst_personen", JSON.stringify(data))
    },
    "setPersoon": function (persoon, data) {
        return localStorage.setItem(persoon, JSON.stringify(data))
    },
    "setGeselecteerd_persoon": function (data) {
        return localStorage.setItem("letterkuil-geselekteerd_persoon", JSON.stringify(data))
    },
    "setGeselecteerde_letters": function (data) {
        return localStorage.setItem("letterkuil-geselekteerde_letters", JSON.stringify(data))
    },
    "check": function () {
        if (!localStorage.getItem("letterkuil-lijst_personen")) {
            localStorage.setItem("letterkuil-lijst_personen", JSON.stringify([]))
        }
    },
    "remove": function (key) {
        localStorage.removeItem(key)
    }
}
