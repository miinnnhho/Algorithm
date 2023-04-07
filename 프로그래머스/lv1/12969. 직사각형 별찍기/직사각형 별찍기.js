process.stdin.setEncoding('utf8');
process.stdin.on('data', data => { 
    let n = data.split(" "); //data를 하나씩 분리
    let a = Number(n[0]), b = Number(n[1]); //가로 세로
    const star = `${'*'.repeat(a)}\n`;
    console.log(star.repeat(b));
}); 
