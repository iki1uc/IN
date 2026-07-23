class IN_PIPE {

    forward(scan){
        return {
            next: "STATION",
            signature: scan.hash,
            payload: scan
        };
    }
}

window.IN_PIPE = new IN_PIPE();
