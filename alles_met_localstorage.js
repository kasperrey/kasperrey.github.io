export function getLijst_met_personen() {
    return JSON.parse(localStorage.getItem("letterkuil-lijst_personen"))
}

export function getPersoon(persoon) {
    return JSON.parse(localStorage.getItem(persoon))
}

export function getGeselecteerd_persoon() {
    return JSON.parse(localStorage.getItem("letterkuil-geselekteerd_persoon"))
}

export function getGeselecteerde_letters() {
    return JSON.parse(localStorage.getItem("letterkuil-geselekteerde_letters"))
}

export function setLijst_met_personen(data) {
    localStorage.setItem("letterkuil-lijst_personen", JSON.stringify(data))
}

export function setPersoon(persoon, data) {
    return localStorage.setItem(persoon, JSON.stringify(data))
}

export function setGeselecteerd_persoon(data) {
    return localStorage.setItem("letterkuil-geselekteerd_persoon", JSON.stringify(data))
}

export function setGeselecteerde_letters(data) {
    return localStorage.setItem("letterkuil-geselekteerde_letters", JSON.stringify(data))
}

export function check() {
    if (!localStorage.getItem("letterkuil-lijst_personen")) {
        localStorage.setItem("letterkuil-lijst_personen", JSON.stringify([]))
    }
}

export function remove(key) {
    localStorage.removeItem(key)
}