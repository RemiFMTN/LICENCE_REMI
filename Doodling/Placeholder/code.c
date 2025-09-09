#include <stdio.h>

typedef struct Cell{
    int val;
    struct _cell *suiv;
}  Cell;

typedef Cell* Liste;

Liste premier = NULL;