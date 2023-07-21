## Command

Some command just like javascript, the only different is keyword and this language will translate to javascript and run as javascript. I know, this is just for fun.
### Variable

Assign variable
```
variable foo samadengan "hello world"
// let foo = "hello world"

constant foo itu 123
// const foo = 123
```

Reassign variable
```
isiulang foo dengan "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
variable foo samadengan positive vibes
// let foo = true

variable foo samadengan worth it
// let foo = true

variable foo samadengan negative vibes
// let foo = false
```

### Print / Console.log
```
tampilkan "Hello world"
// console.log("Hello world")

tampilkan foo
// console.log(foo)
```


### Condition

```
jika foo itu "Hello world"
  tampilkan "its hello world"
dahan

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
jika foo lebih gede 3
  tampilkan "its bigger than 3"
selainitu foo itu 3
  tampilkan "foo is 3"
kalogak
  tampilkan "its smaller than 3"
dahan

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `itu`: ' == ',
- `gak`: ' != ',
- `lebih gede`: ' > ',
- `lebih kecil`: ' < ',
- `lebih gede sama dengan`: ' >= ',
- `lebih kecil sama dengan`: ' <= '

### Loop

#### **`For` loop**:
```
untuk i sampai 10
  jika i lebih gede 3
    tampilkan "loop ke " + i
  dahan
dahan

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

#### **`For of` loop**:
```
untuk semua foo dari bar
  tampilkan foo
dahan

// transform to
for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:
```
stop
// break;

skip
// continue;
```

### Function
```
fungsi my_story
    variable umur samadengan 21
    tampilkan "Umur lu " + umur
dahan

panggil my_story

fungsi fungsi_param_banyak a b c
    tampilkan "a: " + a
    tampilkan "b: " + b
    tampilkan "c: " + c
dahan

panggil fungsi_param_banyak 3 4 5
```

### Async Function
```
async fungsi my_story
    variable umur samadengan 21
    tampilkan "Umur lu " + umur
dahan

panggil my_story

async fungsi fungsi_param_banyak a b c
    tampilkan "a: " + a
    tampilkan "b: " + b
    tampilkan "c: " + c
dahan

panggil fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
coba
  tampilkan "Something wrong"
  gagal "Error message"
tangkap
  tampilkan "Catch error"
yaudah
  tampilkan "finish finally"
dahan


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```
