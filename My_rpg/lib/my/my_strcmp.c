/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strcmp.c
*/

int my_strcmp(const char *s1, const char *s2)
{
    int i;

    i = 0;
    while (s1[i] == s2[i] && s1[i] != '\0') {
        i = i + 1;
    }
    return (s1[i] - s2[i]);
}
