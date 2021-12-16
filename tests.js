// Unit tests for the helloWorld function
describe('helloWorld', function () {
    it('should be a defined function', function () {
        expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function () {
        expect(helloWorld()).not.toBe(undefined);
    });
});


describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe("function");
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when true is passed', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" when false is passed', function () {
        expect(sayHello(false)).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" null is passed', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" when there is an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!");
    })
    it('should return the string "Hello, World!" when a number is passed', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    })
});


describe("isFive", function () {
    it('should be defined as a function', function () {
        expect(typeof isFive).toBe("function");
    })
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    })
    it('should return true whe passed the number 5', function () {
        expect(isFive(5)).toBe(true);
    })
    it('should return the true when 5 is entered as a string', function () {
        expect(isFive("5")).toBe(true);
    })
})


describe("isEven", function () {
    it('should be defined as a function', function () {
        expect(typeof isEven).toBe("function");
    })
    it('should return as a boolean regardless of input', function () {
        expect(typeof isEven()).toBe("boolean");
    })
    it('should return true when passed 2', function () {
        expect(isEven(2)).toBe(true);
    })
    it('should return true when passed -4', function () {
        expect(isEven(-4)).toBe(true);
    })
    it('should return false when passed string "banana"', function () {
        expect(isEven("banana")).toBe(false);
    })
    it('should return true when passed string "8"', function () {
        expect(isEven("8")).toBe(true);
    })
    it('should return false when passed infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    })
    it('should return false when passed a boolean', function () {
        expect(isEven(true)).toBe(false);
    })
    it('should return false when no parameter is given', function () {
        expect(isEven()).toBe(false);
    })
})


describe('isVowel', function () {
    it('should be defined as a function', function () {
        expect(typeof isVowel).toBe("function");
    })
    it('should always return as a boolean', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return "a" as true', function () {
        expect(isVowel("a")).toBe(true);
    })
    it('should return "A" as true', function () {
        expect(isVowel("A")).toBe(true);
    })
    it('should return "y" as false', function () {
        expect(isVowel("y")).toBe(false);
    })
    it('should return 4 as false', function () {
        expect(isVowel(4)).toBe(false);
    })
    it('should return false when passed a boolen', function () {
        expect(isVowel(true)).toBe(false);
    })
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    })

})
