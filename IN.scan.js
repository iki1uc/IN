class IN_SCAN {

    detect(value){
        return {
            type: typeof value,
            length: (""+value).length,
            hash: (value * 7) % 999999
        };
    }
}

window.IN_SCAN = new IN_SCAN();
