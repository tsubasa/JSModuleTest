# import ES Modules

## setup

```
$ yarn
```

## run

```
$ yarn preview
> Hello CommonJS!
> Hello CommonJS!
> Hello ESModules!
```

## config

#### package.json

```JSON5
{
  "type": "module",
}
```

#### tsconfig.json

```JSON5
{
  "module": "ESNext",
  "moduleResolution": "node",
}
```
