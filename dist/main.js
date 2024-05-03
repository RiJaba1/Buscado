function toggleClass(className, toggleClass) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(toggleClass)) {
            elements[i].classList.remove(toggleClass);
        } else {
            elements[i].classList.add(toggleClass);
        }
    }
}