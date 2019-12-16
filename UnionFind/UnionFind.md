## Operations 

__Find query__: Check if two objects are in the same component. 

__Union command__: replace components containing two objects with their union. 

```
e.g. given a set { 0 } { 1 4 5 } { 2 3 6 7 }  
union(2, 5) : { 0 } { 1 2 3 4 5 6 7 }
```

## Modeling the connections 

__Reflexive__: _p_ is connected to _p_ 
__Symmetric__: if _p_ is connected to _q_, then _q_ is connected to _p_ 
__Transitive__: if _p_ is connected to _q_ and _q_ is connected to _r_, then _p_ is connected to _r_.

__Connected components__: Maximal _set_ of objects that are mutually connected, e.g. { 0 } { 1 4 5 } { 2 3 6 7 }


