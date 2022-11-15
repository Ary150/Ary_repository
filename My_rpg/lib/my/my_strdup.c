/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strdup.c
*/

#include <stdlib.h>

int my_strlen(const char *str);
char *my_strcpy(char *dest, const char *src);

char *my_strdup(const char *str)
{
    char *str2;
    int len;

    len = my_strlen(str);
    str2 = (char *) malloc(len * sizeof(char));
    str2 = my_strcpy(str2, str);
    return (str2);
}
