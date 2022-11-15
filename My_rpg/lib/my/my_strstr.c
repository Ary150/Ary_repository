/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strstr.c
*/

#include <stdlib.h>

int my_strncmp(const char *s1, const char *s2, int n);
int my_strlen(const char *str);

char *my_strstr(char *str, const char *to_find)
{
    int len;

    len = my_strlen(to_find);
    if (len == 0)
        return (str);
    while (*str) {
        if (*str == *to_find) {
            if (my_strncmp(str, to_find, len) == 0)
                return (str);
        }
        str++;
    }
    return (NULL);
}
