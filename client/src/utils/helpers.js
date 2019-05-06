// Returns a color based on index
export const backgroundGenerator = idx => {
    const colors = ['#5cd9e9', '#650eb1', '#a0dc5f', '#ca5457','#b363c9','#7fd6c3'];

    return colors[idx % colors.length];
};

// Returns the firstLetter of a given string
export const getInitialLetter = text => {
    return text ? text[0] : '';
};

// Keep track of the progress percentage of promises
export const allProgress = (proms, progress_cb) => {
    let d = 0;
    progress_cb(0);

    const progress_acc = ()=> {
        d++;
        progress_cb((d * 100) / proms.length);
    };

    for(const p of proms){
        p.then(progress_acc);
    }
    return Promise.all(proms);
};