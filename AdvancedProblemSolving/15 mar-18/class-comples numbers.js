class complex {
    #real;
    #img;
    constructor(r, i) {
        this.#real = r;
        this.#img = i;
    }
    get real() {
        return this.#real;
    }
    get img() {
        return this.#img;
    }
    addComplexNumber(c) {
        this.#img += c.img;
        this.#real += c.real;
    }
    display() {
        console.log( this.#real, " + i", this.#img);
    }
}

const c1 = new complex(5, 3);
const c2 = new complex(1, 2);
c1.addComplexNumber(c2);
c1.display();