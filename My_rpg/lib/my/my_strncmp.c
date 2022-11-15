/*
** ETNA PROJECT, 2022
** LIBMY
** File description
** 		my_strcmp.c
*/

int my_strncmp(const char *s1, const char *s2, int n)
{
    int i;

    i = 0;
    while (s1[i] == s2[i] && s1[i] != '\0' && i < n) {
        i = i + 1;
    }
    if (i == n)
        return (0);
    return (s1[i] - s2[i]);
}
